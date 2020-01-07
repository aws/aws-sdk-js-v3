import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RebootInstanceRequest, RebootInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootInstanceCommandInput = RebootInstanceRequest;
export declare type RebootInstanceCommandOutput = RebootInstanceResult & __MetadataBearer;
export declare class RebootInstanceCommand extends $Command<RebootInstanceCommandInput, RebootInstanceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: RebootInstanceCommandInput;
    constructor(input: RebootInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootInstanceCommandInput, RebootInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
