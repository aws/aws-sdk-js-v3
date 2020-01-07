import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEnrollmentStatusCommandInput = GetEnrollmentStatusRequest;
export declare type GetEnrollmentStatusCommandOutput = GetEnrollmentStatusResponse & __MetadataBearer;
export declare class GetEnrollmentStatusCommand extends $Command<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetEnrollmentStatusCommandInput;
    constructor(input: GetEnrollmentStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
