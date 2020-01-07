import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterImageRequest, RegisterImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterImageCommandInput = RegisterImageRequest;
export declare type RegisterImageCommandOutput = RegisterImageResult & __MetadataBearer;
export declare class RegisterImageCommand extends $Command<RegisterImageCommandInput, RegisterImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RegisterImageCommandInput;
    constructor(input: RegisterImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterImageCommandInput, RegisterImageCommandOutput>;
    private serialize;
    private deserialize;
}
