import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DisableAddOnRequest, DisableAddOnResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableAddOnCommandInput = DisableAddOnRequest;
export declare type DisableAddOnCommandOutput = DisableAddOnResult & __MetadataBearer;
export declare class DisableAddOnCommand extends $Command<DisableAddOnCommandInput, DisableAddOnCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DisableAddOnCommandInput;
    constructor(input: DisableAddOnCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAddOnCommandInput, DisableAddOnCommandOutput>;
    private serialize;
    private deserialize;
}
