import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DeprecateDomainInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeprecateDomainCommandInput = DeprecateDomainInput;
export declare type DeprecateDomainCommandOutput = __MetadataBearer;
export declare class DeprecateDomainCommand extends $Command<DeprecateDomainCommandInput, DeprecateDomainCommandOutput, SWFClientResolvedConfig> {
    readonly input: DeprecateDomainCommandInput;
    constructor(input: DeprecateDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateDomainCommandInput, DeprecateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
