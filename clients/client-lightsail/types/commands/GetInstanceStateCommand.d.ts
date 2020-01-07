import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceStateRequest, GetInstanceStateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceStateCommandInput = GetInstanceStateRequest;
export declare type GetInstanceStateCommandOutput = GetInstanceStateResult & __MetadataBearer;
export declare class GetInstanceStateCommand extends $Command<GetInstanceStateCommandInput, GetInstanceStateCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceStateCommandInput;
    constructor(input: GetInstanceStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceStateCommandInput, GetInstanceStateCommandOutput>;
    private serialize;
    private deserialize;
}
