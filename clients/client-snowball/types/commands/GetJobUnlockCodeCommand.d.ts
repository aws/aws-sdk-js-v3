import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetJobUnlockCodeRequest, GetJobUnlockCodeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobUnlockCodeCommandInput = GetJobUnlockCodeRequest;
export declare type GetJobUnlockCodeCommandOutput = GetJobUnlockCodeResult & __MetadataBearer;
export declare class GetJobUnlockCodeCommand extends $Command<GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetJobUnlockCodeCommandInput;
    constructor(input: GetJobUnlockCodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput>;
    private serialize;
    private deserialize;
}
