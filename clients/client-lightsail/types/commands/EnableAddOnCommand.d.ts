import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { EnableAddOnRequest, EnableAddOnResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableAddOnCommandInput = EnableAddOnRequest;
export declare type EnableAddOnCommandOutput = EnableAddOnResult & __MetadataBearer;
export declare class EnableAddOnCommand extends $Command<EnableAddOnCommandInput, EnableAddOnCommandOutput, LightsailClientResolvedConfig> {
    readonly input: EnableAddOnCommandInput;
    constructor(input: EnableAddOnCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAddOnCommandInput, EnableAddOnCommandOutput>;
    private serialize;
    private deserialize;
}
