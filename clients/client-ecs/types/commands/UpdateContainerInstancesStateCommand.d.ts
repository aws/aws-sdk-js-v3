import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateContainerInstancesStateRequest, UpdateContainerInstancesStateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateContainerInstancesStateCommandInput = UpdateContainerInstancesStateRequest;
export declare type UpdateContainerInstancesStateCommandOutput = UpdateContainerInstancesStateResponse & __MetadataBearer;
export declare class UpdateContainerInstancesStateCommand extends $Command<UpdateContainerInstancesStateCommandInput, UpdateContainerInstancesStateCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateContainerInstancesStateCommandInput;
    constructor(input: UpdateContainerInstancesStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContainerInstancesStateCommandInput, UpdateContainerInstancesStateCommandOutput>;
    private serialize;
    private deserialize;
}
