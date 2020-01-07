"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QueryForecastCommand_1 = require("./commands/QueryForecastCommand");
const forecastqueryClient_1 = require("./forecastqueryClient");
/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
class forecastquery extends forecastqueryClient_1.forecastqueryClient {
    queryForecast(args, optionsOrCb, cb) {
        const command = new QueryForecastCommand_1.QueryForecastCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.forecastquery = forecastquery;
//# sourceMappingURL=forecastquery.js.map