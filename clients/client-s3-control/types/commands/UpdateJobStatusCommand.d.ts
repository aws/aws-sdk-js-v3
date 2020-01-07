import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { UpdateJobStatusRequest, UpdateJobStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateJobStatusCommandInput = UpdateJobStatusRequest;
export declare type UpdateJobStatusCommandOutput = UpdateJobStatusResult & __MetadataBearer;
export declare class UpdateJobStatusCommand extends $Command<UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: UpdateJobStatusCommandInput;
    constructor(input: UpdateJobStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput>;
    private serialize;
    private deserialize;
}
