import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceRequest, GetInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceCommandInput = GetInstanceRequest;
export declare type GetInstanceCommandOutput = GetInstanceResult & __MetadataBearer;
export declare class GetInstanceCommand extends $Command<GetInstanceCommandInput, GetInstanceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstanceCommandInput;
    constructor(input: GetInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceCommandInput, GetInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
