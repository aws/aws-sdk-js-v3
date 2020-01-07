import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { AddTagsToCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsToCertificateCommandInput = AddTagsToCertificateRequest;
export declare type AddTagsToCertificateCommandOutput = __MetadataBearer;
export declare class AddTagsToCertificateCommand extends $Command<AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: AddTagsToCertificateCommandInput;
    constructor(input: AddTagsToCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
