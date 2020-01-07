import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteEndpointConfigInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEndpointConfigCommandInput = DeleteEndpointConfigInput;
export declare type DeleteEndpointConfigCommandOutput = __MetadataBearer;
export declare class DeleteEndpointConfigCommand extends $Command<DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteEndpointConfigCommandInput;
    constructor(input: DeleteEndpointConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput>;
    private serialize;
    private deserialize;
}
