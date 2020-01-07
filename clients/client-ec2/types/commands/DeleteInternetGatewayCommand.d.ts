import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteInternetGatewayRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInternetGatewayCommandInput = DeleteInternetGatewayRequest;
export declare type DeleteInternetGatewayCommandOutput = __MetadataBearer;
export declare class DeleteInternetGatewayCommand extends $Command<DeleteInternetGatewayCommandInput, DeleteInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteInternetGatewayCommandInput;
    constructor(input: DeleteInternetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInternetGatewayCommandInput, DeleteInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
