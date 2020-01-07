import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { UpdateCertificateOptionsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCertificateOptionsCommandInput = UpdateCertificateOptionsRequest;
export declare type UpdateCertificateOptionsCommandOutput = __MetadataBearer;
export declare class UpdateCertificateOptionsCommand extends $Command<UpdateCertificateOptionsCommandInput, UpdateCertificateOptionsCommandOutput, ACMClientResolvedConfig> {
    readonly input: UpdateCertificateOptionsCommandInput;
    constructor(input: UpdateCertificateOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCertificateOptionsCommandInput, UpdateCertificateOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
