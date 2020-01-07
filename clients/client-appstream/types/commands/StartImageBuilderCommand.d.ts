import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StartImageBuilderRequest, StartImageBuilderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartImageBuilderCommandInput = StartImageBuilderRequest;
export declare type StartImageBuilderCommandOutput = StartImageBuilderResult & __MetadataBearer;
export declare class StartImageBuilderCommand extends $Command<StartImageBuilderCommandInput, StartImageBuilderCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: StartImageBuilderCommandInput;
    constructor(input: StartImageBuilderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartImageBuilderCommandInput, StartImageBuilderCommandOutput>;
    private serialize;
    private deserialize;
}
