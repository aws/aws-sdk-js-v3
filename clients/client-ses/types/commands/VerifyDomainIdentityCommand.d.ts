import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type VerifyDomainIdentityCommandInput = VerifyDomainIdentityRequest;
export declare type VerifyDomainIdentityCommandOutput = VerifyDomainIdentityResponse & __MetadataBearer;
export declare class VerifyDomainIdentityCommand extends $Command<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyDomainIdentityCommandInput;
    constructor(input: VerifyDomainIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
