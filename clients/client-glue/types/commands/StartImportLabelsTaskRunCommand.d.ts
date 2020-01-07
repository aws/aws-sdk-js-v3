import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartImportLabelsTaskRunRequest, StartImportLabelsTaskRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartImportLabelsTaskRunCommandInput = StartImportLabelsTaskRunRequest;
export declare type StartImportLabelsTaskRunCommandOutput = StartImportLabelsTaskRunResponse & __MetadataBearer;
export declare class StartImportLabelsTaskRunCommand extends $Command<StartImportLabelsTaskRunCommandInput, StartImportLabelsTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartImportLabelsTaskRunCommandInput;
    constructor(input: StartImportLabelsTaskRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartImportLabelsTaskRunCommandInput, StartImportLabelsTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
