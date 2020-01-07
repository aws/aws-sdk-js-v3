import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { SetStatusInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetStatusCommandInput = SetStatusInput;
export declare type SetStatusCommandOutput = __MetadataBearer;
export declare class SetStatusCommand extends $Command<SetStatusCommandInput, SetStatusCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: SetStatusCommandInput;
    constructor(input: SetStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetStatusCommandInput, SetStatusCommandOutput>;
    private serialize;
    private deserialize;
}
