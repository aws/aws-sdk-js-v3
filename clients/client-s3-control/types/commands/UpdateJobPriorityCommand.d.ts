import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { UpdateJobPriorityRequest, UpdateJobPriorityResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateJobPriorityCommandInput = UpdateJobPriorityRequest;
export declare type UpdateJobPriorityCommandOutput = UpdateJobPriorityResult & __MetadataBearer;
export declare class UpdateJobPriorityCommand extends $Command<UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: UpdateJobPriorityCommandInput;
    constructor(input: UpdateJobPriorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput>;
    private serialize;
    private deserialize;
}
