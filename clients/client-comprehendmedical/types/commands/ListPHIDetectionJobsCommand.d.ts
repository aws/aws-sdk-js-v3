import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { ListPHIDetectionJobsRequest, ListPHIDetectionJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPHIDetectionJobsCommandInput = ListPHIDetectionJobsRequest;
export declare type ListPHIDetectionJobsCommandOutput = ListPHIDetectionJobsResponse & __MetadataBearer;
export declare class ListPHIDetectionJobsCommand extends $Command<ListPHIDetectionJobsCommandInput, ListPHIDetectionJobsCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: ListPHIDetectionJobsCommandInput;
    constructor(input: ListPHIDetectionJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPHIDetectionJobsCommandInput, ListPHIDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
