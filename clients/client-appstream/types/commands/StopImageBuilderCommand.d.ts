import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StopImageBuilderRequest, StopImageBuilderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopImageBuilderCommandInput = StopImageBuilderRequest;
export declare type StopImageBuilderCommandOutput = StopImageBuilderResult & __MetadataBearer;
export declare class StopImageBuilderCommand extends $Command<StopImageBuilderCommandInput, StopImageBuilderCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: StopImageBuilderCommandInput;
    constructor(input: StopImageBuilderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopImageBuilderCommandInput, StopImageBuilderCommandOutput>;
    private serialize;
    private deserialize;
}
