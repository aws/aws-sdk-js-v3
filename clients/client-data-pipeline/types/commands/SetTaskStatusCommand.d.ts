import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { SetTaskStatusInput, SetTaskStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetTaskStatusCommandInput = SetTaskStatusInput;
export declare type SetTaskStatusCommandOutput = SetTaskStatusOutput & __MetadataBearer;
export declare class SetTaskStatusCommand extends $Command<SetTaskStatusCommandInput, SetTaskStatusCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: SetTaskStatusCommandInput;
    constructor(input: SetTaskStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTaskStatusCommandInput, SetTaskStatusCommandOutput>;
    private serialize;
    private deserialize;
}
