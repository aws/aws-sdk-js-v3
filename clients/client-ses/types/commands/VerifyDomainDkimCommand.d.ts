import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyDomainDkimRequest, VerifyDomainDkimResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyDomainDkimCommandInput = VerifyDomainDkimRequest;
export declare type VerifyDomainDkimCommandOutput = VerifyDomainDkimResponse & __MetadataBearer;
export declare class VerifyDomainDkimCommand extends $Command<VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyDomainDkimCommandInput;
    constructor(input: VerifyDomainDkimCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput>;
    private serialize;
    private deserialize;
}
