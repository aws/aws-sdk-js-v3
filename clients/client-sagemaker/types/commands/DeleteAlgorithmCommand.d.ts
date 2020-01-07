import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteAlgorithmInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAlgorithmCommandInput = DeleteAlgorithmInput;
export declare type DeleteAlgorithmCommandOutput = __MetadataBearer;
export declare class DeleteAlgorithmCommand extends $Command<DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteAlgorithmCommandInput;
    constructor(input: DeleteAlgorithmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
