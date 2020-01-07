import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancePortStatesRequest, GetInstancePortStatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstancePortStatesCommandInput = GetInstancePortStatesRequest;
export declare type GetInstancePortStatesCommandOutput = GetInstancePortStatesResult & __MetadataBearer;
export declare class GetInstancePortStatesCommand extends $Command<GetInstancePortStatesCommandInput, GetInstancePortStatesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetInstancePortStatesCommandInput;
    constructor(input: GetInstancePortStatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstancePortStatesCommandInput, GetInstancePortStatesCommandOutput>;
    private serialize;
    private deserialize;
}
