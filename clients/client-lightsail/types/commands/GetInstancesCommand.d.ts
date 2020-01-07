import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancesRequest, GetInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstancesCommandInput = GetInstancesRequest;
export declare type GetInstancesCommandOutput = GetInstancesResult & __MetadataBearer;
export declare class GetInstancesCommand extends $Command<GetInstancesCommandInput, GetInstancesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstancesCommandInput;
    constructor(input: GetInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstancesCommandInput, GetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
