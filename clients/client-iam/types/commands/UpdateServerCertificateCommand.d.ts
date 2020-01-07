import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateServerCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServerCertificateCommandInput = UpdateServerCertificateRequest;
export declare type UpdateServerCertificateCommandOutput = __MetadataBearer;
export declare class UpdateServerCertificateCommand extends $Command<UpdateServerCertificateCommandInput, UpdateServerCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateServerCertificateCommandInput;
    constructor(input: UpdateServerCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServerCertificateCommandInput, UpdateServerCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
