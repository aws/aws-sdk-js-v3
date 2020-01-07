import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RegisterDomainInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterDomainCommandInput = RegisterDomainInput;
export declare type RegisterDomainCommandOutput = __MetadataBearer;
export declare class RegisterDomainCommand extends $Command<RegisterDomainCommandInput, RegisterDomainCommandOutput, SWFClientResolvedConfig> {
    readonly input: RegisterDomainCommandInput;
    constructor(input: RegisterDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDomainCommandInput, RegisterDomainCommandOutput>;
    private serialize;
    private deserialize;
}
