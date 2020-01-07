import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBlueprintsRequest, GetBlueprintsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBlueprintsCommandInput = GetBlueprintsRequest;
export declare type GetBlueprintsCommandOutput = GetBlueprintsResult & __MetadataBearer;
export declare class GetBlueprintsCommand extends $Command<GetBlueprintsCommandInput, GetBlueprintsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetBlueprintsCommandInput;
    constructor(input: GetBlueprintsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBlueprintsCommandInput, GetBlueprintsCommandOutput>;
    private serialize;
    private deserialize;
}
