import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateEndpointWeightsAndCapacitiesInput, UpdateEndpointWeightsAndCapacitiesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEndpointWeightsAndCapacitiesCommandInput = UpdateEndpointWeightsAndCapacitiesInput;
export declare type UpdateEndpointWeightsAndCapacitiesCommandOutput = UpdateEndpointWeightsAndCapacitiesOutput & __MetadataBearer;
export declare class UpdateEndpointWeightsAndCapacitiesCommand extends $Command<UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateEndpointWeightsAndCapacitiesCommandInput;
    constructor(input: UpdateEndpointWeightsAndCapacitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput>;
    private serialize;
    private deserialize;
}
