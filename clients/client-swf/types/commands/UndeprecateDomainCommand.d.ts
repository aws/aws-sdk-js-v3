import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { UndeprecateDomainInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UndeprecateDomainCommandInput = UndeprecateDomainInput;
export declare type UndeprecateDomainCommandOutput = __MetadataBearer;
export declare class UndeprecateDomainCommand extends $Command<UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput, SWFClientResolvedConfig> {
    readonly input: UndeprecateDomainCommandInput;
    constructor(input: UndeprecateDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
