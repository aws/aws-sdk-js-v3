import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { RegisterDomainRequest, RegisterDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterDomainCommandInput = RegisterDomainRequest;
export declare type RegisterDomainCommandOutput = RegisterDomainResponse & __MetadataBearer;
export declare class RegisterDomainCommand extends $Command<RegisterDomainCommandInput, RegisterDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: RegisterDomainCommandInput;
    constructor(input: RegisterDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDomainCommandInput, RegisterDomainCommandOutput>;
    private serialize;
    private deserialize;
}
