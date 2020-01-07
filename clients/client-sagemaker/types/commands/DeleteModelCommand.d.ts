import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteModelCommandInput = DeleteModelInput;
export declare type DeleteModelCommandOutput = __MetadataBearer;
export declare class DeleteModelCommand extends $Command<DeleteModelCommandInput, DeleteModelCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelCommandInput;
    constructor(input: DeleteModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelCommandInput, DeleteModelCommandOutput>;
    private serialize;
    private deserialize;
}
