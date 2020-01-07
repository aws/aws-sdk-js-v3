import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterImageRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterImageCommandInput = DeregisterImageRequest;
export declare type DeregisterImageCommandOutput = __MetadataBearer;
export declare class DeregisterImageCommand extends $Command<DeregisterImageCommandInput, DeregisterImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterImageCommandInput;
    constructor(input: DeregisterImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterImageCommandInput, DeregisterImageCommandOutput>;
    private serialize;
    private deserialize;
}
