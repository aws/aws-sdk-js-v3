import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateTrialRequest, UpdateTrialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTrialCommandInput = UpdateTrialRequest;
export declare type UpdateTrialCommandOutput = UpdateTrialResponse & __MetadataBearer;
export declare class UpdateTrialCommand extends $Command<UpdateTrialCommandInput, UpdateTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateTrialCommandInput;
    constructor(input: UpdateTrialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrialCommandInput, UpdateTrialCommandOutput>;
    private serialize;
    private deserialize;
}
