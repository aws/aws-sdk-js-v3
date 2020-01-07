import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListFlowDefinitionsRequest, ListFlowDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFlowDefinitionsCommandInput = ListFlowDefinitionsRequest;
export declare type ListFlowDefinitionsCommandOutput = ListFlowDefinitionsResponse & __MetadataBearer;
export declare class ListFlowDefinitionsCommand extends $Command<ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListFlowDefinitionsCommandInput;
    constructor(input: ListFlowDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
