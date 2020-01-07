import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ResendValidationEmailRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResendValidationEmailCommandInput = ResendValidationEmailRequest;
export declare type ResendValidationEmailCommandOutput = __MetadataBearer;
export declare class ResendValidationEmailCommand extends $Command<ResendValidationEmailCommandInput, ResendValidationEmailCommandOutput, ACMClientResolvedConfig> {
    readonly input: ResendValidationEmailCommandInput;
    constructor(input: ResendValidationEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResendValidationEmailCommandInput, ResendValidationEmailCommandOutput>;
    private serialize;
    private deserialize;
}
