import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { UpdateEnrollmentStatusRequest, UpdateEnrollmentStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEnrollmentStatusCommandInput = UpdateEnrollmentStatusRequest;
export declare type UpdateEnrollmentStatusCommandOutput = UpdateEnrollmentStatusResponse & __MetadataBearer;
export declare class UpdateEnrollmentStatusCommand extends $Command<UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: UpdateEnrollmentStatusCommandInput;
    constructor(input: UpdateEnrollmentStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
