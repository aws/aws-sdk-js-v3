import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DisableRadiusRequest, DisableRadiusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableRadiusCommandInput = DisableRadiusRequest;
export declare type DisableRadiusCommandOutput = DisableRadiusResult & __MetadataBearer;
export declare class DisableRadiusCommand extends $Command<DisableRadiusCommandInput, DisableRadiusCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DisableRadiusCommandInput;
    constructor(input: DisableRadiusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableRadiusCommandInput, DisableRadiusCommandOutput>;
    private serialize;
    private deserialize;
}
