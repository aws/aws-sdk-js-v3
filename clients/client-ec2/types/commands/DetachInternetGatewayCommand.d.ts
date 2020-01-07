import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachInternetGatewayRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachInternetGatewayCommandInput = DetachInternetGatewayRequest;
export declare type DetachInternetGatewayCommandOutput = __MetadataBearer;
export declare class DetachInternetGatewayCommand extends $Command<DetachInternetGatewayCommandInput, DetachInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachInternetGatewayCommandInput;
    constructor(input: DetachInternetGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachInternetGatewayCommandInput, DetachInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
