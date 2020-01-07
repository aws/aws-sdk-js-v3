import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListActionTypesInput, ListActionTypesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListActionTypesCommandInput = ListActionTypesInput;
export declare type ListActionTypesCommandOutput = ListActionTypesOutput & __MetadataBearer;
export declare class ListActionTypesCommand extends $Command<ListActionTypesCommandInput, ListActionTypesCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListActionTypesCommandInput;
    constructor(input: ListActionTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActionTypesCommandInput, ListActionTypesCommandOutput>;
    private serialize;
    private deserialize;
}
