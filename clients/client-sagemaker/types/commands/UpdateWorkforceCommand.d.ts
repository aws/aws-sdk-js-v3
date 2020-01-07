import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateWorkforceRequest, UpdateWorkforceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateWorkforceCommandInput = UpdateWorkforceRequest;
export declare type UpdateWorkforceCommandOutput = UpdateWorkforceResponse & __MetadataBearer;
export declare class UpdateWorkforceCommand extends $Command<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateWorkforceCommandInput;
    constructor(input: UpdateWorkforceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput>;
    private serialize;
    private deserialize;
}
