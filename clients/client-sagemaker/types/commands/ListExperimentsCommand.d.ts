import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListExperimentsCommandInput = ListExperimentsRequest;
export declare type ListExperimentsCommandOutput = ListExperimentsResponse & __MetadataBearer;
export declare class ListExperimentsCommand extends $Command<ListExperimentsCommandInput, ListExperimentsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListExperimentsCommandInput;
    constructor(input: ListExperimentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExperimentsCommandInput, ListExperimentsCommandOutput>;
    private serialize;
    private deserialize;
}
