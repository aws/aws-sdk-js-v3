import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCandidatesForAutoMLJobRequest, ListCandidatesForAutoMLJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCandidatesForAutoMLJobCommandInput = ListCandidatesForAutoMLJobRequest;
export declare type ListCandidatesForAutoMLJobCommandOutput = ListCandidatesForAutoMLJobResponse & __MetadataBearer;
export declare class ListCandidatesForAutoMLJobCommand extends $Command<ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListCandidatesForAutoMLJobCommandInput;
    constructor(input: ListCandidatesForAutoMLJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput>;
    private serialize;
    private deserialize;
}
