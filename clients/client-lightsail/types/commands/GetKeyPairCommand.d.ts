import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetKeyPairRequest, GetKeyPairResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetKeyPairCommandInput = GetKeyPairRequest;
export declare type GetKeyPairCommandOutput = GetKeyPairResult & __MetadataBearer;
export declare class GetKeyPairCommand extends $Command<GetKeyPairCommandInput, GetKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetKeyPairCommandInput;
    constructor(input: GetKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKeyPairCommandInput, GetKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
