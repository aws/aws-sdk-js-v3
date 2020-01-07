import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartExportLabelsTaskRunRequest, StartExportLabelsTaskRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartExportLabelsTaskRunCommandInput = StartExportLabelsTaskRunRequest;
export declare type StartExportLabelsTaskRunCommandOutput = StartExportLabelsTaskRunResponse & __MetadataBearer;
export declare class StartExportLabelsTaskRunCommand extends $Command<StartExportLabelsTaskRunCommandInput, StartExportLabelsTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartExportLabelsTaskRunCommandInput;
    constructor(input: StartExportLabelsTaskRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExportLabelsTaskRunCommandInput, StartExportLabelsTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
