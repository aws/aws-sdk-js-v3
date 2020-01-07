import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpnGatewayRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVpnGatewayCommandInput = DeleteVpnGatewayRequest;
export declare type DeleteVpnGatewayCommandOutput = __MetadataBearer;
export declare class DeleteVpnGatewayCommand extends $Command<DeleteVpnGatewayCommandInput, DeleteVpnGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpnGatewayCommandInput;
    constructor(input: DeleteVpnGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpnGatewayCommandInput, DeleteVpnGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
