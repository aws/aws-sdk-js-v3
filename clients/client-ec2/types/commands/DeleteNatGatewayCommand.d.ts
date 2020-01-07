import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNatGatewayCommandInput = DeleteNatGatewayRequest;
export declare type DeleteNatGatewayCommandOutput = DeleteNatGatewayResult & __MetadataBearer;
export declare class DeleteNatGatewayCommand extends $Command<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNatGatewayCommandInput;
    constructor(input: DeleteNatGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
