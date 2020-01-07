import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateScalingParametersRequest, UpdateScalingParametersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateScalingParametersCommandInput = UpdateScalingParametersRequest;
export declare type UpdateScalingParametersCommandOutput = UpdateScalingParametersResponse & __MetadataBearer;
export declare class UpdateScalingParametersCommand extends $Command<UpdateScalingParametersCommandInput, UpdateScalingParametersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: UpdateScalingParametersCommandInput;
    constructor(input: UpdateScalingParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateScalingParametersCommandInput, UpdateScalingParametersCommandOutput>;
    private serialize;
    private deserialize;
}
