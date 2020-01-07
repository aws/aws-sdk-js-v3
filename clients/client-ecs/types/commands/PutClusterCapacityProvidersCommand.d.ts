import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutClusterCapacityProvidersRequest, PutClusterCapacityProvidersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutClusterCapacityProvidersCommandInput = PutClusterCapacityProvidersRequest;
export declare type PutClusterCapacityProvidersCommandOutput = PutClusterCapacityProvidersResponse & __MetadataBearer;
export declare class PutClusterCapacityProvidersCommand extends $Command<PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutClusterCapacityProvidersCommandInput;
    constructor(input: PutClusterCapacityProvidersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
