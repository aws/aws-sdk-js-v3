import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachInternetGatewayRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachInternetGatewayCommandInput = AttachInternetGatewayRequest;
export declare type AttachInternetGatewayCommandOutput = __MetadataBearer;
export declare class AttachInternetGatewayCommand extends $Command<AttachInternetGatewayCommandInput, AttachInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachInternetGatewayCommandInput;
    constructor(input: AttachInternetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachInternetGatewayCommandInput, AttachInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
